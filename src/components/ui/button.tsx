import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as utils from '@/lib/utils';

const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex gap-2 items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-lighten-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      // Variants with explicit hover and pressed (active) states
      variant: {
        primary: "bg-primary hover:bg-primary-darken-1 active:bg-primary-darken-2 text-white",
        secondary: "bg-gray-lighten-4 hover:bg-gray-lighten-3 active:bg-gray-lighten-2 text-primary border border-gray-lighten-2",
        tertiary: "bg-transparent hover:bg-gray-lighten-4 active:bg-gray-lighten-3 text-primary",
        danger: "bg-danger hover:bg-danger-darken-1 active:bg-danger-darken-2 text-white",
        success: "bg-success hover:bg-success-darken-1 active:bg-success-darken-2 text-white",
        warning: "bg-warning hover:bg-warning-darken-1 active:bg-warning-darken-2 text-gray-darken-4",
        ghost: "bg-transparent hover:bg-gray-lighten-4 active:bg-gray-lighten-3 text-primary",
        link: "bg-transparent underline-offset-4 hover:underline text-primary p-0 h-auto font-normal",
      },
      // Sizes
      size: {
        sm: "text-sm h-8 px-3 py-1",
        md: "text-base h-10 px-4 py-2",
        lg: "text-lg h-12 px-6 py-2",
      },
      // Rounding options
      rounded: {
        default: "rounded", // Default slightly rounded corners
        full: "rounded-full", // Pill-shaped button
        none: "rounded-none", // Square corners
      },
      // Full width option
      fullWidth: {
        true: "w-full",
      },
      // Circle button option (fully round button with equal width/height)
      circle: {
        true: "rounded-full p-0 flex items-center justify-center",
      },
      // Density variants
      density: {
        default: "",
        high: "py-0", // Less padding for high density
        low: "py-3",  // More padding for low density
      },
      // Inverted colors for dark backgrounds
      inverted: {
        true: "",
      },
      // State options (for forced states in demos)
      state: {
        default: "",
        hover: "hover",
        pressed: "active",
        focused: "focus",
        disabled: "opacity-50 cursor-not-allowed pointer-events-none",
      },

      square: {
        true: "aspect-square p-0 flex items-center justify-center",
      },
    },
    // Apply specific styles when certain variant combinations are used
    compoundVariants: [
      // Circle size adjustments
      { circle: true, size: "sm", className: "w-8 h-8" },
      { circle: true, size: "md", className: "w-10 h-10" },
      { circle: true, size: "lg", className: "w-12 h-12" },
      
      // Inverted variants
      { inverted: true, variant: "primary", className: "bg-white text-primary hover:bg-gray-lighten-4 active:bg-gray-lighten-3" },
      { inverted: true, variant: "secondary", className: "bg-primary-darken-4 text-white border-primary-darken-2 hover:bg-primary-darken-3 active:bg-primary-darken-2" },
      { inverted: true, variant: "tertiary", className: "text-white hover:bg-primary-darken-3 active:bg-primary-darken-2" },
      { inverted: true, variant: "ghost", className: "text-white hover:bg-primary-darken-3 active:bg-primary-darken-2" },
      { inverted: true, variant: "link", className: "text-white" },
      
      // Size-specific rounded adjustments (for consistency with original design)
      { size: "lg", rounded: "default", className: "rounded-md" },
      
      // Forced hover states
      { state: "hover", variant: "primary", className: "bg-primary-darken-1" },
      { state: "hover", variant: "secondary", className: "bg-gray-lighten-3" },
      { state: "hover", variant: "tertiary", className: "bg-gray-lighten-4" },
      { state: "hover", variant: "danger", className: "bg-danger-darken-1" },
      { state: "hover", variant: "success", className: "bg-success-darken-1" },
      { state: "hover", variant: "warning", className: "bg-warning-darken-1" },
      { state: "hover", variant: "ghost", className: "bg-gray-lighten-4" },
      { state: "hover", variant: "link", className: "underline" },
      
      // Forced pressed/active states
      { state: "pressed", variant: "primary", className: "bg-primary-darken-2" },
      { state: "pressed", variant: "secondary", className: "bg-gray-lighten-2" },
      { state: "pressed", variant: "tertiary", className: "bg-gray-lighten-3" },
      { state: "pressed", variant: "danger", className: "bg-danger-darken-2" },
      { state: "pressed", variant: "success", className: "bg-success-darken-2" },
      { state: "pressed", variant: "warning", className: "bg-warning-darken-2" },
      { state: "pressed", variant: "ghost", className: "bg-gray-lighten-3" },
      
      // Forced focus states
      { state: "focused", className: "ring-2 ring-primary-lighten-2 ring-offset-2" },
      
      // Inverted hover states
      { state: "hover", inverted: true, variant: "primary", className: "bg-gray-lighten-4" },
      { state: "hover", inverted: true, variant: "secondary", className: "bg-primary-darken-3" },
      { state: "hover", inverted: true, variant: "tertiary", className: "bg-primary-darken-3" },
      { state: "hover", inverted: true, variant: "ghost", className: "bg-primary-darken-3" },
      
      // Inverted pressed/active states
      { state: "pressed", inverted: true, variant: "primary", className: "bg-gray-lighten-3" },
      { state: "pressed", inverted: true, variant: "secondary", className: "bg-primary-darken-2" },
      { state: "pressed", inverted: true, variant: "tertiary", className: "bg-primary-darken-2" },
      { state: "pressed", inverted: true, variant: "ghost", className: "bg-primary-darken-2" },

      { square: true, size: "sm", className: "w-8 h-8" },
      { square: true, size: "md", className: "w-10 h-10" },
      { square: true, size: "lg", className: "w-12 h-12" },

    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "default",
      fullWidth: false,
      circle: false,
      density: "default",
      inverted: false,
      state: "default",
      
    },
  }
);

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  children?: React.ReactNode;
  state?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled';
  square?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, 
    variant,
    size,
    rounded,
    fullWidth,
    circle,
    density,
    inverted,
    loading = false,
    icon,
    iconPosition = 'left',
    disabled = false,
    state = 'default',
    children,
    square = false,
    ...props
  }, ref) => {
    // Calculate proper spacing for icons
    const iconSpacing = size === 'sm' ? 'mr-1' : size === 'lg' ? 'mr-3' : 'mr-2';
    const rightIconSpacing = size === 'sm' ? 'ml-1' : size === 'lg' ? 'ml-3' : 'ml-2';
    
    // If it's a circle button with an icon but no children, we don't need spacing
    const showLeftIconSpacing = !circle && !square && children && iconPosition === 'left';
    const showRightIconSpacing = !circle && !square && children && iconPosition === 'right';
    
    // Determine if we should use the disabled state
    const effectiveState = disabled ? 'disabled' : state;

    return (
      <button
        className={utils.cn(
          buttonVariants({ 
            variant, 
            size, 
            rounded,
            fullWidth, 
            circle,
            square,
            density,
            inverted,
            state: effectiveState,
            className 
          })
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <Loader2 className={utils.cn(
            "animate-spin", 
            children ? (iconPosition === 'left' ? iconSpacing : rightIconSpacing) : ""
          )} 
          size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} 
          />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className={showLeftIconSpacing ? iconSpacing : ""}>
            {icon}
          </span>
        )}
        
        {children}
        
        {!loading && icon && iconPosition === 'right' && (
          <span className={showRightIconSpacing ? rightIconSpacing : ""}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };