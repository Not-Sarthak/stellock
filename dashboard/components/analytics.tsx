"use client";

import {
  Card,
  Title,
  Grid,
  AreaChart,
} from "@tremor/react";
import { User } from "@/constants/data";
import { UserClient } from "./tables/user-tables/client";
import { users } from "@/constants/data";


interface ProductsClientProps {
  data: User[];
}

const chartdata = [
  {
    date: "Jan 23",
    Visitors: 2890,
  },
  {
    date: "Feb 23",
    Visitors: 2756,
  },
  {
    date: "Mar 23",
    Visitors: 3322,
  },
  {
    date: "Apr 23",
    Visitors: 3470,
  },
  {
    date: "May 23",
    Visitors: 3475,
  },
  {
    date: "Jun 23",
    Visitors: 3129,
  },
];

export default function AnalyticsMockup() {
  return (
    <div className="grid gap-6 text-white">
      <Card>
        <Title>Visitors</Title>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["Visitors"]}
          colors={["indigo"]}
          valueFormatter={(number: number) =>
            Intl.NumberFormat("us").format(number).toString()
          }
        />
      </Card>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6 text-white">
        <div>
          <Title>All Users</Title>
        </div>
      </Grid>
      <UserClient data={users} />
    </div>
  );
}
