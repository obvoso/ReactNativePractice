
import { createStackNavigator } from '@react-navigation/stack';

import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const Router = () => (
	<RootStack.Navigator>
		<RootStack.Screen 
			name="Home" 
			//stack navigator의 컴포넌트로 bottom tab navigator
			//Router컴포넌트를 호출 한 app.js에서 <Container>사용했으니까
			//하위 네비들은 <Container>로 안 감싸고 바로 네비게이터 객체 만들어서 <Navigator>만 사용해도됨
			component={BottomHomeNavigator}
			options={{
				headerShown: false,
			}}
		/>
		<RootStack.Screen
			name ="Story"
			//원래는 component로 Screen호출하는 게 맞는데 위에가 특이한듯??
			component={StoryScreen}
			options={{
				headerShown: false,
			}}
		/>
		
	</RootStack.Navigator>
)
export default Router;