import { FieldValues, useForm } from "react-hook-form";
import * as S from "./AddEventPopup.styles";
import { Input } from "../../../shared/components/Input/Input.styles";
import {
  ButtonGroup,
  CancelButton,
} from "../../../shared/components/DeletePopup/DeletePopup.styles";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <S.Title>{t("addEvent")}</S.Title>
      <S.AddEventForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          isError={errors.summary ? true : false}
          placeholder={t("summaryPlaceholder")}
          {...register("summary", { required: true, maxLength: 20 })}
        />
        <Input
          isError={errors.start ? true : false}
          placeholder={t("startPlaceholder")}
          type="datetime-local"
          {...register("start", { required: true })}
        />
        <Input
          isError={errors.end ? true : false}
          placeholder={t("endPlaceholder")}
          type="datetime-local"
          {...register("end", { required: true })}
        />

        <S.ErrorText isError={isError()}>{t("errorText")}</S.ErrorText>

        <ButtonGroup>
          <CancelButton onClick={onCancel}>{t("cancel")}</CancelButton>
          <S.SubmitButton type="submit">{t("submit")}</S.SubmitButton>
        </ButtonGroup>
      </S.AddEventForm>
    </S.AddEventPopup>
  );
};
