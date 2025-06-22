import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Wallet,
  Bell,
  Users,
  ArrowUpRight
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s your profit overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450.67</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12.5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today&apos;s Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+$1,234.56</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.2% today
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">
                3 profitable, 2 neutral, 3 down
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Signals Today</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">
                3 executed, 2 pending
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="signals">Signals</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest trades and signals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { action: "Bought", coin: "PEPE", amount: "1000", profit: "+$450", time: "2h ago", positive: true },
                    { action: "Sold", coin: "DOGE", amount: "500", profit: "+$120", time: "4h ago", positive: true },
                    { action: "Signal", coin: "SHIB", amount: "New Alert", profit: "Pending", time: "6h ago", positive: null },
                    { action: "Bought", coin: "BONK", amount: "2000", profit: "-$80", time: "8h ago", positive: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${item.positive === true ? 'bg-green-500' : item.positive === false ? 'bg-red-500' : 'bg-yellow-500'}`} />
                        <div>
                          <div className="font-medium">{item.action} {item.coin}</div>
                          <div className="text-sm text-muted-foreground">{item.amount} • {item.time}</div>
                        </div>
                      </div>
                      <div className={`font-medium ${item.positive === true ? 'text-green-500' : item.positive === false ? 'text-red-500' : 'text-yellow-500'}`}>
                        {item.profit}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Performers */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Best performing coins in your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { coin: "PEPE", change: "+45.2%", value: "$5,234", icon: "🐸" },
                    { coin: "DOGE", change: "+23.1%", value: "$3,120", icon: "🐕" },
                    { coin: "BONK", change: "+18.7%", value: "$2,890", icon: "🐕" },
                    { coin: "SHIB", change: "+12.4%", value: "$1,567", icon: "🐕" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="font-medium">{item.coin}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-green-600 bg-green-500/10 border-green-500/20">
                        {item.change}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="signals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Latest Signals from @cryptokopo</CardTitle>
                <CardDescription>Real-time trading opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { coin: "NEW_COIN", action: "BUY", confidence: "High", time: "5 min ago", price: "$0.00012", target: "$0.00025" },
                    { coin: "MOON_TOKEN", action: "HOLD", confidence: "Medium", time: "15 min ago", price: "$0.045", target: "$0.060" },
                    { coin: "PUMP_IT", action: "SELL", confidence: "High", time: "1 hour ago", price: "$0.023", target: "$0.018" },
                  ].map((signal, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge className={`${signal.action === 'BUY' ? 'bg-green-500 text-white' : signal.action === 'SELL' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'}`}>
                          {signal.action}
                        </Badge>
                        <div>
                          <div className="font-medium">{signal.coin}</div>
                          <div className="text-sm text-muted-foreground">Target: {signal.target}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{signal.price}</div>
                        <div className="text-sm text-muted-foreground">{signal.time}</div>
                      </div>
                      <Button size="sm">
                        Execute
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Holdings</CardTitle>
                <CardDescription>Detailed view of your positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { coin: "PEPE", amount: "1,000,000", value: "$5,234", change: "+45.2%", allocation: "42%" },
                    { coin: "DOGE", amount: "50,000", value: "$3,120", change: "+23.1%", allocation: "25%" },
                    { coin: "BONK", amount: "2,000,000", value: "$2,890", change: "+18.7%", allocation: "23%" },
                    { coin: "SHIB", amount: "100,000,000", value: "$1,567", change: "+12.4%", allocation: "10%" },
                  ].map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
                          {holding.coin.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{holding.coin}</div>
                          <div className="text-sm text-muted-foreground">{holding.amount} tokens</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{holding.value}</div>
                        <div className="text-sm text-green-600">{holding.change}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Allocation</div>
                        <div className="font-medium">{holding.allocation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                  <CardDescription>MilkBot community overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100K+</div>
                      <div className="text-sm text-muted-foreground">Members</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$50M+</div>
                      <div className="text-sm text-muted-foreground">Profits Generated</div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Traders</CardTitle>
                  <CardDescription>This week&apos;s best performers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "CryptoWhale", profit: "+$45,230", rank: 1 },
                    { name: "MoonWalker", profit: "+$32,150", rank: 2 },
                    { name: "DiamondHands", profit: "+$28,900", rank: 3 },
                    { name: "LuckyTrader", profit: "+$25,670", rank: 4 },
                  ].map((trader, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {trader.rank}
                        </div>
                        <div className="font-medium">{trader.name}</div>
                      </div>
                      <div className="text-green-600 font-medium">{trader.profit}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 