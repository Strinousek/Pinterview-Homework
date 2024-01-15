import { NavigationContainer } from "@react-navigation/native";
import CreateTodoScreen from "../screens/CreateTodoScreen";
import EditTodoScreen from "../screens/EditTodoScreen";
import TodoListScreen from "../screens/TodoListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamListType = {
    TodoList: undefined,
    CreateTodo: undefined,
    EditTodo: { todoId: number },
}

const Stack = createNativeStackNavigator<RootStackParamListType>()

const AppRouter = () => {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName='TodoList'>
          <Stack.Screen
            name="TodoList"
            component={TodoListScreen}
            options={{title: "ToDo Seznam"}}
          />
          <Stack.Screen
            name="CreateTodo"
            component={CreateTodoScreen}
            options={{title: "Vytvořit nové ToDo"}}
          />
          <Stack.Screen
            name="EditTodo"
            component={EditTodoScreen}
            options={{title: "Upravit existující ToDo"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppRouter;