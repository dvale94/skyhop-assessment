type ButtonProps = {
  disabled?: boolean;
  height?: string;
  primary?: boolean;
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  width?: string;
};

export default function Button({ 
  disabled=false,
  height='45px',
  primary=true,
  text,
  type=undefined,
  width='240px'
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg
        ${primary ? 'bg-blue-900' : 'border-2 border-yellow-500'} 
        w-[${width}]
        h-[${height}]
      `}
      disabled={disabled}
      type={type}
    >
      <p className={primary ? 'text-white' : 'text-yellow-500'}>{text}</p>
    </button>
  )
}