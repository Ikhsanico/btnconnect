"use client"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A donut chart"
const chartData = [
  { browser: "Product 1", visitors: 275, fill: "#015BFD" },
  { browser: "Product 2", visitors: 200, fill: "#FF0000" },
  { browser: "Product 3", visitors: 187, fill: "#043D7F" },
  { browser: "Product 4", visitors: 173, fill: "#11B668" },
  { browser: "Product 5", visitors: 90, fill: "#FFBF00" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  product1: {
    label: "Product 1",
    color: "#015BFD",
  },
  product2: {
    label: "Product 2",
    color: "#FF0000",
  },
  product3: {
    label: "Product 3",
    color: "#043D7F",
  },
  product4: {
    label: "Product 4",
    color: "#11B668",
  },
  other: {
    label: "Other",
    color: "#FFBF00",
  },
} satisfies ChartConfig

const TransactionsChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Spent</CardTitle>
        <CardDescription>30 June - 31 August 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Transactions up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total transactions for the last 3 months
        </div>
      </CardFooter>
    </Card>
  )
}
  

export default TransactionsChart