import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkeletonHome() {
  return (
    <div className="flex flex-col space-y-4 bg-green-500 min-h-screen">
      <header className="p-4">
        <Skeleton className="h-8 w-40 bg-white/50" />
      </header>

      <div className="flex-1 space-y-4 p-4 bg-gray-900">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              <Skeleton className="h-10 w-full bg-gray-700" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full bg-gray-700" />
            <div className="grid grid-cols-5 gap-2">
              {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-6 bg-gray-700" />
              ))}
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-10 w-32 bg-gray-700" />
              <Skeleton className="h-10 w-32 bg-gray-700" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              <Skeleton className="h-10 w-full bg-gray-700" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
              <Skeleton className="h-5 w-20 bg-gray-700" />
            </div>
            <Skeleton className="h-10 w-full bg-gray-700" />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              <Skeleton className="h-10 w-full bg-gray-700" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
              <Skeleton className="h-5 w-32 bg-gray-700" />
            </div>
            <Skeleton className="h-10 w-full bg-gray-700" />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <Skeleton className="h-6 w-32 bg-gray-700" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full bg-gray-700" />
          </CardContent>
        </Card>
      </div>

      <footer className="flex justify-around p-4 bg-gray-800">
        <Skeleton className="h-10 w-10 rounded-full bg-gray-700" />
        <Skeleton className="h-10 w-10 rounded-full bg-gray-700" />
        <Skeleton className="h-10 w-10 rounded-full bg-gray-700" />
        <Skeleton className="h-10 w-10 rounded-full bg-gray-700" />
      </footer>
    </div>
  );
}
