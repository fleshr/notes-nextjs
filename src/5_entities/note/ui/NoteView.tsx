import { TbEdit } from "react-icons/tb";
import { Button } from "./Button";
import { NoteType } from "../model/Note";
import moment from "moment";

interface IProps {
  note: NoteType;
  isEditable: boolean;
  onEditButtonClick: () => void;
}

export const NoteView: React.FC<IProps> = ({
  isEditable,
  onEditButtonClick,
  note: { title, content, updatedAt },
}) => {
  const readableDate = moment(updatedAt).format("MMM D, YYYY");

  return (
    <>
      {title && <h3 className="mb-2.5 font-medium break-words">{title}</h3>}
      <p className="mb-5 text-sm break-words">{content}</p>
      <div className="mt-auto flex min-h-[28px]">
        {isEditable && (
          <Button onClick={() => onEditButtonClick()}>
            <TbEdit />
          </Button>
        )}
        <time className="ml-auto self-end text-xs text-black/80 dark:text-white/70">
          {readableDate}
        </time>
      </div>
    </>
  );
};
