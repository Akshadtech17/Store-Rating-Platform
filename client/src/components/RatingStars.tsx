interface RatingInputProps {
  value: number;
  onChange: (value: number) => void;
}

const RatingInput = ({
  value,
  onChange,
}: RatingInputProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
        >
          {star <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
};

export default RatingInput;