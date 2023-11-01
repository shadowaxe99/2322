import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSentimentData } from '../redux/actions';
import { Line } from 'react-chartjs-2';

const SentimentAnalyzer = () => {
  const dispatch = useDispatch();
  const sentimentData = useSelector(state => state.sentimentData);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    dispatch(fetchSentimentData());
  }, [dispatch]);

  useEffect(() => {
    if (sentimentData) {
      const data = {
        labels: sentimentData.map(item => item.date),
        datasets: [
          {
            label: 'Sentiment Score',
            data: sentimentData.map(item => item.score),
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      };
      setChartData(data);
    }
  }, [sentimentData]);

  return (
    <div id="sentimentAnalyzer">
      <h2>Sentiment Analyzer</h2>
      {sentimentData ? (
        <Line data={chartData} />
      ) : (
        <p>Loading sentiment data...</p>
      )}
    </div>
  );
};

export default SentimentAnalyzer;