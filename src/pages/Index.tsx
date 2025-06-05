
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ContentViral Pro</h1>
        <p className="text-xl text-gray-600 mb-8">AI-Powered Content Recycling Engine</p>
        <Link to="/sales">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View Sales Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
