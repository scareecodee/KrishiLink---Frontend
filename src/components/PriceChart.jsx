import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceChart = ({ data, title, showPrediction }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow h-80">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#16a34a" activeDot={{ r: 8 }} name="Historical Price" />
          {showPrediction && (
            <Line type="monotone" dataKey="predicted" stroke="#15803d" strokeDasharray="5 5" name="Predicted Price" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
