import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Bell, 
  Users, 
  Zap, 
  DollarSign, 
  Shield,
  Bot,
  MessageCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">
                MilkBot
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-muted-foreground">
                Milk Your Profits
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The ultimate Solana memecoin trading platform. Get real-time alerts from top influencers,
              track your profits, and join the community of successful traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Bot className="mr-2 h-5 w-5" />
                Connect Telegram Bot
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Partners</h2>
            <p className="text-muted-foreground">We are proud to collaborate with leading platforms and influencers.</p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-6">
                Featured Influencers
              </h3>
              <div className="flex justify-center">
                <Badge variant="secondary" className="p-3 text-lg">
                  🏆 @cryptokopo
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-6">
                Platform Integrations
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 text-muted-foreground">
                <span className="font-semibold text-lg">DEXSCREENER</span>
                <span className="font-semibold text-lg">pump.fun</span>
                <span className="font-semibold text-lg">CoinMarketCap</span>
                <span className="font-semibold text-lg">Solscan</span>
                <span className="font-semibold text-lg">JUPITER</span>
                <span className="font-semibold text-lg">ORCA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MilkBot?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in the Solana memecoin market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Bell className="h-8 w-8 text-primary mb-2" />, 
                title: "Influencer Alerts", 
                description: "Get premium signals from top influencers, starting with @cryptokopo." 
              },
              { 
                icon: <Zap className="h-8 w-8 text-primary mb-2" />, 
                title: "Quick Trading", 
                description: "Execute trades directly from Telegram or web dashboard." 
              },
              { 
                icon: <TrendingUp className="h-8 w-8 text-primary mb-2" />, 
                title: "Profit Tracking", 
                description: "Monitor your portfolio performance in real-time." 
              },
              { 
                icon: <Users className="h-8 w-8 text-primary mb-2" />, 
                title: "Community", 
                description: "Join 100k+ traders in our exclusive community." 
              },
              { 
                icon: <Shield className="h-8 w-8 text-primary mb-2" />, 
                title: "Secure", 
                description: "Your funds stay in your wallet - we never hold them." 
              },
              { 
                icon: <MessageCircle className="h-8 w-8 text-primary mb-2" />, 
                title: "24/7 Support", 
                description: "Get help anytime through our community channels." 
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Total Profits Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Market Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Signals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Milking Profits?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders who are already profiting with MilkBot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <DollarSign className="mr-2 h-5 w-5" />
              Start Trading Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
