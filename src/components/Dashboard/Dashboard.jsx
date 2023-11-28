import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
          "id": 1,
          "name": "John Doe",
          "math": 85,
          "physics": 78,
          "chemistry": 90
        },
        {
          "id": 2,
          "name": "Alice Smith",
          "math": 92,
          "physics": 88,
          "chemistry": 95
        },
        {
          "id": 3,
          "name": "Bob Johnson",
          "math": 76,
          "physics": 80,
          "chemistry": 85
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "math": 89,
          "physics": 92,
          "chemistry": 88
        },
        {
          "id": 5,
          "name": "Michael Brown",
          "math": 78,
          "physics": 85,
          "chemistry": 76
        },
        {
          "id": 6,
          "name": "Sophia Wilson",
          "math": 94,
          "physics": 90,
          "chemistry": 92
        },
        {
          "id": 7,
          "name": "Oliver Taylor",
          "math": 82,
          "physics": 75,
          "chemistry": 80
        },
        {
          "id": 8,
          "name": "Emma Martinez",
          "math": 87,
          "physics": 82,
          "chemistry": 84
        },
        {
          "id": 9,
          "name": "Daniel Anderson",
          "math": 91,
          "physics": 88,
          "chemistry": 89
        },
        {
          "id": 10,
          "name": "Ava Jackson",
          "math": 83,
          "physics": 79,
          "chemistry": 81
        }
      ];
      
    return (
        <div>
            <LineChart 
                width={1000}
                height={300}
                data={marksArray}
                >
                <Line dataKey="physics"></Line>
                <Line stroke='#8884d8' dataKey="chemistry"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;