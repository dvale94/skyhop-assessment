type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  primary?: boolean;
  text: string;
  type?: 'submit' | 'reset' | 'button';
};

export default function Button({
  disabled = false,
  onClick,
  primary = true,
  text,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg w-full h-full ${
        primary
          ? 'bg-blue-900 hover:bg-blue-800'
          : 'border-2 border-yellow-500 hover:border-blue-900'
      }`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <p className={`text-sm ${primary ? 'text-white' : 'text-yellow-500'}`}>{text}</p>
    </button>
  );
}
