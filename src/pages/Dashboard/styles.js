import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  margin-top: 20px;
`;

/** Header list styles */

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  margin: 0 20px;
  align-self: center;
`;

export const HeaderLeftButton = styled.TouchableOpacity``;

export const HeaderRightButton = styled.TouchableOpacity``;
