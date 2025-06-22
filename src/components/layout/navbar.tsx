import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Bell, 
  Users, 
  Menu
} from "lucide-react";
import { WalletConnectButton } from "./wallet-button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🥛</div>
            <div className="text-xl font-bold text-foreground">
              <span className="text-primary">
                MilkBot
              </span>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="#signals" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Bell className="h-4 w-4" />
              <span>Signals</span>
            </a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Community</span>
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <WalletConnectButton />
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Bell className="h-4 w-4 mr-2" />
              Get Alerts
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 