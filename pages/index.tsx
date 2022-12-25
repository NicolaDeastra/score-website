import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import axios from 'axios';
import { Box, Heading, Stack } from '@chakra-ui/react';
import useSWR from 'swr';

const getAllEvent = async () => {
  try {
    const res = await axios.get(
      'https://api.sofascore.com/api/v1/odds/1/featured-events/football'
    );

    return await res.data;
  } catch (error) {
    return error;
  }
};

const IndexPage = () => {
  const { data } = useSWR('/getLatestEvent', getAllEvent);

  console.log(data);
  return (
    <Box>
      <Stack>
        {data?.featuredEvents?.map((item, index) => (
          <Heading key={index}>1</Heading>
        ))}
      </Stack>
    </Box>
  );
};

export default IndexPage;
