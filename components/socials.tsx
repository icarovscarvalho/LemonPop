interface SocialsProps {
  link: string
  social: React.ElementType;
}

export function Socials({link, social: Icon}:SocialsProps) {
  return(
    <a href={link} target="_Blank">
      <Icon className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] hover:text-amber-400 active:scale-90" />
    </a>
  )
}