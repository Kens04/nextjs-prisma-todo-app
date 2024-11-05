import { Anchor, Group } from "@mantine/core";

const Header = () => {
  return (
    <div>
      <Group justify="center">
        <Anchor href="/todos" underline="hover">
          TODO一覧
        </Anchor>
        <Anchor href="/todos/create" underline="hover">
          TODO作成
        </Anchor>
        <Anchor href="/signin" underline="hover">
          ログイン
        </Anchor>
        <Anchor href="/signup" underline="hover">
          新規登録
        </Anchor>
        <Anchor href="/mypage" underline="hover">
          ユーザー
        </Anchor>
      </Group>
    </div>
  );
};

export default Header;
