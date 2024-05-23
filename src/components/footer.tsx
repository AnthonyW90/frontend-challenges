function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:text-neutral-500 text-black font-bold"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="fixed text-neutral-700 bottom-6 left-6 flex text-xs flex-col sm:flex-row items-center w-full sm:items-start gap-0 sm:gap-1 sm:left-8"
      data-gfe-screenshot-exclude="true"
    >
      <p>
        A challenge by{" "}
        <FooterLink href="https://www.frontendmentor.io?ref=challenges">
          GreatFrontEnd Projects
        </FooterLink>
        .
      </p>
      <p>
        Built by{" "}
        <FooterLink href="https://www.greatfrontend.com/projects/u/default">
          Anthony Wallace
        </FooterLink>
        .
      </p>
      <p>
        View the code on{" "}
        <FooterLink href="https://github.com/AnthonyW90/testimonial-card">
          GitHub
        </FooterLink>
        .
      </p>
    </footer>
  );
}
