import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton>
      <Text>{title}</Text>
    </NativeBaseButton>
  );
}
