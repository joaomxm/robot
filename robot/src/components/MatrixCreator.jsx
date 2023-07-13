import {
    Button,
    Circle,
    Divider,
    Flex,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'

const MatrixCreator = () => {
    const defaultMatrixBullet = {}

    const [matrixBullet, setMatrixBullet] = useState(defaultMatrixBullet)

    const onClickBullet = useCallback(
        (bulletId) => {
            const active = matrixBullet[bulletId].active
            setMatrixBullet({
                ...matrixBullet,
                [bulletId]: { active: !active },
            })
        },
        [matrixBullet]
    )

    const MatrixBullets = () => {
        const idsBullets = []

        for (var row = 0; row < 8; row++) {
            for (var column = 0; column < 8; column++) {
                let id = row.toString() + column.toString()
                idsBullets.push(id)
                defaultMatrixBullet[id] = {
                    id: { active: false },
                }
            }
        }

        return idsBullets.map((bulletId, index) => (
            <Circle
                key={index}
                size="10px"
                bg={matrixBullet[bulletId].active ? 'red' : 'gray.800'}
                onClick={(e) => onClickBullet(bulletId)}
            />
        ))
    }

    return (
        <Flex
            position={'fixed'}
            w={'full'}
            justifyContent={'center'}
            bottom={'0'}
            p={'16px'}
        >
            <Flex background={'blackAlpha.300'} p={5}>
                <Stack bg={'blackAlpha.800'} p={1}>
                    <SimpleGrid columns={[8]} gap={1}>
                        <MatrixBullets />
                    </SimpleGrid>
                </Stack>

                <Stack ml={3} mr={3}>
                    <Divider orientation="vertical" />
                </Stack>

                <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    gap={3}
                >
                    <Button size={'sm'} colorScheme="blue">
                        View
                    </Button>
                    <Button size={'sm'} colorScheme="green">
                        Save
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MatrixCreator
