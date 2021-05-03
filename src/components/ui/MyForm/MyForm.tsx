import { TextField } from '@material-ui/core';

interface Props {
  onSubmit: () => void;
}

export const MyForm: React.FC<Props> = () => {
  return <TextField />;
};
