import React from 'react';
import { mapModifiers } from 'lib/component';
import { Link } from 'gatsby';

type Modifier =
  | "resell"
  | "filter"
  | "iconshare"
  | "showmore"
  | "more"
  | "noti"
  | "create"
  | "noBackground"
  | "noBorder"
  | "noPadding"
  | "secondary"
  | "asText"
  | "icon"
  | "buy"
  | "bid"
  | "asLink"
  | "report"
  | "buycolor"
  | "postcomment"
  | "iconshareitem"
  | "connect"
  | "review"
  | "createbig"
  | "connectmobile"
  | "expanded"
  | "connectwallet"
  | "marginRight"
  | "noticeCreate"
  | "noBackgroundBorder"
  | "bigDone"
  | "payment"
  | "cancelpayment"
  | "reportExplore"
  | "posticon"
  | "claim"
  | "term"
  | "getCoin"
  | "totalClaim"
  | "transparent"
  | "marginbottom"
  | "bell"
  | "bellcont"
  | "category"
  | "iconshareitemView"
  | "sharemain"
  | "CCNmember"
  | "inline"
  | "exploreMenu"
  | "black"
  | "history"
  | "buycart"
  | "gallery"
  | "inlinType";

interface Props {
  modifiers?: Modifier | Modifier[];
  children: any;
  anchor?: {
    href: string;
    target?: string;
    external?: boolean;
  };
  handleClick?: (e?: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ref?: any;
  style?: any;
}

export const Button: React.FC<Props> = (props) => {
  return props.anchor ? (
    !props.anchor.external ? (
      <Link
        to={props.anchor.href}
        className={mapModifiers("a-button", props.modifiers)}
        target={props.anchor.target}
      >
        {props.children}
      </Link>
    ) : (
      // eslint-disable-next-line react/forbid-elements
      <a
        href={props.anchor.href}
        className={mapModifiers("a-button", props.modifiers)}
        target={props.anchor.target}
      >
        {props.children}
      </a>
    )
  ) : (
    <button
      className={mapModifiers("a-button", props.modifiers)}
      onClick={props.handleClick}
      type={props.type || "button"}
      disabled={props.disabled}
      ref={props.ref}
      style={{ backgroundColor: props.style }}
    >
      {props.children}
    </button>
  );
};
