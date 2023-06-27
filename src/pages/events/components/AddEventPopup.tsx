import { FieldValues, useForm } from "react-hook-form";
import * as S from "./AddEventPopup.styles";
import { Input } from "../../../shared/components/Input/Input.styles";
import {
  ButtonGroup,
  CancelButton,
} from "../../../shared/components/DeletePopup/DeletePopup.styles";
import { format } from "date-fns";

interface AddEventPopupProps {
  onCancel: () => void;
  onSave: (payload: FieldValues) => void;
}

export const AddEventPopup = ({ onCancel, onSave }: AddEventPopupProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const payload = {
      summary: data.summary,
      start: {
        dateTime: format(new Date(data.start), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
        timeZone,
      },
      end: {
        dateTime: format(new Date(data.end), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
        timeZone,
      },
    };

    onSave(payload);
    reset();
  };

  const isError = () => {
    return errors.summary || errors.start || errors.end ? true : false;
  };

  return (
    <S.AddEventPopup>
      <S.Title>Add event</S.Title>
      <S.AddEventForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          isError={errors.summary ? true : false}
          placeholder="Summary*"
          {...register("summary", { required: true, maxLength: 20 })}
        />
        <Input
          isError={errors.start ? true : false}
          placeholder="Start*"
          type="datetime-local"
          {...register("start", { required: true })}
        />
        <Input
          isError={errors.end ? true : false}
          placeholder="End*"
          type="datetime-local"
          {...register("end", { required: true })}
        />

        <S.ErrorText isError={isError()}>Please correct invalid fields</S.ErrorText>

        <ButtonGroup>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <S.SubmitButton type="submit" />
        </ButtonGroup>
      </S.AddEventForm>
    </S.AddEventPopup>
  );
};
