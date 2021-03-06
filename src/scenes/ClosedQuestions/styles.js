import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  position: relative;
  background: #ecf2ff;
`;

export const HeaderContainer = styled.View`
  background: #341c94;
  height: 160px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const Header = styled.View`
  margin: 25px;
  margin-top: 30px;
  flex-direction: row;
  height: 60px;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
`;

export const HeaderItemTitle = styled.Text`
  font-size: 20px;
  height: 100%;
  flex: 1;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const HeaderItemAction = styled(TouchableOpacity)`
  padding: 6px 8px;
`;

export const HeaderItem = styled.Text`
  color: #fff;
`;

export const ListView = styled(FlatList)`
  height: 100%;
  z-index: 10;
  top: -70px;
  left: 1px;
  padding: 0px 25px;
  margin-bottom: -70px;
`;

export const ListItem = styled(BaseButton)`
  background: #fff;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 0px;
  flex-direction: row;
`;

export const IconSequence = styled.View`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  background: #ff455c;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const IconSequenceNumber = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const MetainfoContainer = styled.View`
  flex: 1;
  margin: 0px 15px;
`;

export const MetainfoTitle = styled.Text`
  color: #2d2d2d;
  font-weight: bold;
  font-size: 20px;
`;

export const ContainerNumberQuestions = styled.View`
  flex: 1;
  height: 20px;
  margin-top: 5px;
  flex-direction: row;
`;

export const TextQtdQuestions = styled.Text`
  color: #565656;
`;
