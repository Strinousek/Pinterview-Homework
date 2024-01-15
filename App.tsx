import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TodoType } from './api/models';
import { getTodos } from './store/storage';
import { TodosContextProvider } from './context/todosContext';
import AppRouter from './routes/AppRouter';

const App = () => {
  
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
      const getData = async () => {
          const [todos, loadedSuccessfully] = await getTodos();
          setTodos(todos);
          setLoading(false);
          if(!loadedSuccessfully)
              Alert.alert("Nezdařilo se načíst ToDo list!");
      };
      getData();
  }, []);

  return (<TodosContextProvider todos={todos} setTodos={setTodos} loading={loading} setLoading={setLoading}>
        <AppRouter/>
    </TodosContextProvider>);
};

export default App;