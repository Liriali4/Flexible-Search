import { Box, Button, Input, Center, Text, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosInstance from './axiosConfig';

export default function App(): JSX.Element {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dataToSend, setDataToSend] = useState<string>('');

  const handleSearch = () => {
    axiosInstance.get(`/collections/suaColecao/documents?q=${searchQuery}`)
      .then(response => {
        setSearchResults(response.data.hits);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSendData = () => {
    axiosInstance.post('/collections/suaColecao/documents', { description: dataToSend })
      .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  const handleDataInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataToSend(e.target.value);
  };
//#fcbbd4
  return (
    <Box p={4} bg={'#fcbbd4'}>
      <Center mb={4}>
        <Box>
          <Input placeholder="Enviar dados" value={dataToSend} onChange={handleDataInputChange} />
          <Button ml={2} onClick={handleSendData}>
            Enviar
          </Button>
        </Box>
        <Box>
          <Input placeholder="Digite sua pesquisa" value={searchQuery} onChange={handleInputChange} />
          <Button ml={2} onClick={handleSearch}>
            Pesquisar
          </Button>
        </Box>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {searchResults.map((result: any) => (
          <Box key={result.id}>
            <Text>description: {result.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
