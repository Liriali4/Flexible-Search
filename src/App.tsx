import { Box, Button, Input, Center, Text, SimpleGrid} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function App(): JSX.Element {
  const [searchResults, setSearchResults] = useState<any[]>([]); // Array de resultados da pesquisa

  // Função de pesquisa simulada
  const handleSearch = () => {
    // Simulação de dados de resultados de pesquisa
    const mockData = [
      { id: 1, title: 'Resultado 1', description: 'Descrição do Resultado 1' },
      { id: 2, title: 'Resultado 2', description: 'Descrição do Resultado 2' },
      // ...
    ];
    setSearchResults(mockData); // Define os resultados da pesquisa
  };

  return (
    <Box p={4}>
      <Center mb={4}>
        <Input placeholder="Digite sua pesquisa" />
        <Button ml={2} onClick={handleSearch}>
          Pesquisar
        </Button>
      </Center>

      {/* Exibição dos resultados da pesquisa em um grid simples */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {searchResults.map((result) => (
          <Box key={result.id}  >
            <Text>title:{result.title} </Text>
            <Text>description:{result.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
