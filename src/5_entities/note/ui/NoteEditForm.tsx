import { BiColorFill } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineClose, MdOutlineDone } from "react-icons/md";
import { Button } from "./Button";

interface IProps {
  title: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onColorChange: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onDelete: () => void;
  withDelete?: boolean;
}

export const NoteEditForm: React.FC<IProps> = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onColorChange,
  onCancel,
  onDelete,
  onConfirm,
  withDelete = true,
}) => {
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Note title(optional)"
        className="bg-transparent font-medium placeholder:text-black/50 dark:placeholder:text-white/50"
      />
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Note text"
        className="mt-2.5 mb-5 flex-grow bg-transparent text-sm placeholder:text-black/50 dark:placeholder:text-white/50"
      ></textarea>
      <div className="relative mt-auto flex justify-end gap-2">
        <Button type="button" onClick={onColorChange}>
          <BiColorFill className="text-lg" />
        </Button>
        {withDelete && (
          <Button type="button" onClick={onDelete}>
            <FiTrash2 />
          </Button>
        )}
        <Button type="button" onClick={onCancel}>
          <MdOutlineClose className="text-lg" />
        </Button>
        <Button type="button" onClick={onConfirm}>
          <MdOutlineDone className="text-lg" />
        </Button>
      </div>
    </>
  );
};
