import classNames from 'classnames';

const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
} as const;

const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

type ButtonVariantType = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];
type ButtonSizeType = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

type ButtonProps =
  | {
      variant: Exclude<ButtonVariantType, typeof BUTTON_VARIANT.LINK>;
      size: ButtonSizeType;
      onClick: () => void;
      children: React.ReactNode;
      disabled?: boolean;
      icon?: React.ReactElement;
      iconPosition?: 'left' | 'right';
      type?: 'button' | 'reset' | 'submit';
      isLoading?: boolean;
      customClassNames?: string;
    }
  | {
      variant: typeof BUTTON_VARIANT.LINK;
      href: string;
      target?: string;
      rel?: string;
      children: React.ReactNode;
      customClassNames?: string;
    };

const getButtonSizeClassNames = (size: ButtonSizeType) => {
  switch (size) {
    case BUTTON_SIZE.LARGE:
      return 'text-lg px-52 py-12';
    case BUTTON_SIZE.MEDIUM:
      return 'text-md px-28 py-8';
    case BUTTON_SIZE.SMALL:
      return 'text-sm px-12 py-4';
  }
};

const getButtonDisplayTypeClassNames = (
  variant: ButtonVariantType,
  disabled: boolean
) => {
  switch (variant) {
    case BUTTON_VARIANT.PRIMARY: {
      if (disabled) return 'bg-grey-400 text-solid-white cursor-not-allowed';
      return 'bg-solid-violet-200 text-solid-white hover:bg-solid-violet-100 active:bg-solid-violet-300';
    }

    case BUTTON_VARIANT.SECONDARY: {
      if (disabled)
        return 'bg-gsolid-white border-1 text-grey-400 border-grey-400 cursor-not-allowed';
      return 'bg-solid-white border-1 text-solid-violet-200 border-solid-violet-200 hover:text-solid-violet-100 hover:border-solid-violet-100 active:text-solid-violet-300 active:border-solid-violet-300';
    }
  }
};

const Button = (props: ButtonProps) => {
  const { children, variant, customClassNames } = props;

  if (variant === BUTTON_VARIANT.LINK) {
    const { href, target, rel } = props;

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classNames(
          'text-md cursor-pointer underline text-solid-blue',
          customClassNames
        )}
      >
        {children}
      </a>
    );
  } else {
    const {
      size,
      onClick,
      disabled = false,
      type,
      icon,
      iconPosition,
      isLoading = false,
    } = props;

    const buttonClassNames = classNames(
      getButtonSizeClassNames(size),
      getButtonDisplayTypeClassNames(variant, disabled),
      'rounded-4 flex items-center justify-center space-x-8',
      customClassNames
    );

    return (
      <button
        className={buttonClassNames}
        onClick={disabled ? () => {} : onClick}
        type={type}
        disabled={disabled}
      >
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {iconPosition === 'left' && icon ? icon : null}
            <span>{children}</span>
            {iconPosition === 'right' && icon ? icon : null}
          </>
        )}
      </button>
    );
  }
};

export default Button;
