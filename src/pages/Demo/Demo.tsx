import React, { useEffect, useState } from "react";
import { List, Spin, message } from "antd";
import { apiLlm } from "@/";

// Initial data for fallback
const initialData = [
  {
    title: "Ant Design Title 1",
    description: "abc",
    history: [
      {
        message: "",
        user: "user",
        date: "0618",
      },
    ],
  },
  {
    title: "Ant Design Title 2",
    description: "abc2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export const Demo: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Using chat completion as an example
        const response = await apiLlm.generateChatCompletion([
          { role: "system", content: "You are a helpful assistant that provides demo data for an Ant Design list." },
          { role: "user", content: "Generate 4 list items with title and description in JSON format." }
        ]);

        if (response.success) {
          // Try to parse the content from the API response
          const content = response.data.choices[0].message.content;
          try {
            const parsedData = JSON.parse(content);
            if (Array.isArray(parsedData) && parsedData.length > 0) {
              setData(parsedData);
            }
          } catch (parseError) {
            console.error("Failed to parse API response:", parseError);
            message.warning("Received data in unexpected format, using default data");
          }
        } else {
          message.error(response.error || "Failed to fetch data");
        }
      } catch (error) {
        console.error("API call error:", error);
        message.error("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" tip="Loading data..." />
        </div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description || "Ant Design, a design language for background applications, is refined by Ant UED Team"}
          />
        </List.Item>
      )}
    />
      )}
    </>
  );
};
