// Single source of truth for contact identity + social links.
export const EMAIL = "talk2adeoluwa2310@gmail.com";
export const SITE_HANDLE = "omotosho.xyz";
export const LOCATION = "lagos · remote";

export type SocialLink = {
  id: string;
  label: string;
  /** Two-letter footer shorthand, e.g. "gh" */
  short: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    short: "gh",
    handle: "o-midey",
    href: "https://github.com/o-midey",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    short: "in",
    handle: "omotosho-david",
    href: "https://linkedin.com/in/omotosho-david",
  },
  {
    id: "twitter",
    label: "Twitter",
    short: "tw",
    handle: "@meeedzy",
    href: "https://twitter.com/meeedzy",
  },
  {
    id: "instagram",
    label: "Instagram",
    short: "ig",
    handle: "@thismidey",
    href: "https://instagram.com/thismidey",
  },
];
