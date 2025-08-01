import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      {/* Gradient divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 w-full" />

      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-foreground transition-colors">
            © {new Date().getFullYear()} Learner.ai
          </Link>
          <span className="hidden sm:block">•</span>
          <p className="hidden sm:block">Powered by Krapansh</p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
