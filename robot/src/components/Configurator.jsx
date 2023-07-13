import {
    Box,
    Flex,
    IconButton,
    SimpleGrid,
    Stack,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import {
    FaPlus,
    FaRegFaceFrown,
    FaRegFaceLaugh,
    FaRegFaceMeh,
    FaRegFaceSmile,
    FaRegFaceSmileWink,
} from 'react-icons/fa6'

import { IoMdClose } from 'react-icons/io'
import MatrixCreator from './MatrixCreator'
import { useState } from 'react'

const Configurator = () => {
    const [createFace, setCreateFace] = useState(false)
    return (
        <>
            <Stack
                position={'fixed'}
                right={'24px'}
                w={'320px'}
                bottom={'24vh'}
                color={'white'}
                p={'16px'}
                background={'blackAlpha.300'}
            >
                <Box>
                    <Box mb={3}>
                        <Text fontWeight={'bold'} fontSize={'xl'}>
                            Robot Face Configuration{' '}
                        </Text>
                    </Box>
                    <Box>
                        <Text>Defaults Configurations </Text>
                        <SimpleGrid columns={[4]} gap={2} mt={2}>
                            <IconButton
                                aria-label=""
                                icon={<FaRegFaceMeh />}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<FaRegFaceSmile />}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<FaRegFaceLaugh />}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<FaRegFaceFrown />}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<FaRegFaceSmileWink />}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                        </SimpleGrid>
                    </Box>

                    <Box mt={3}>
                        <Text> New Faces </Text>
                        <SimpleGrid columns={[4]} gap={2} mt={2}>
                            <Flex alignItems={'center'}>
                                <Tooltip
                                    label={
                                        !createFace
                                            ? 'Create Face'
                                            : 'Cancel creation'
                                    }
                                >
                                    <IconButton
                                        aria-label=""
                                        icon={
                                            !createFace ? (
                                                <FaPlus />
                                            ) : (
                                                <IoMdClose />
                                            )
                                        }
                                        colorScheme="blackAlpha"
                                        width={'50px'}
                                        h={'50px'}
                                        onClick={(e) =>
                                            setCreateFace(!createFace)
                                        }
                                    />
                                </Tooltip>
                            </Flex>
                            <IconButton
                                aria-label=""
                                icon={<>1</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>2</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>3</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>4</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>5</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                        </SimpleGrid>
                    </Box>

                    <Box mt={3}>
                        <Text>Animations </Text>
                        <SimpleGrid columns={[4]} gap={2} mt={2}>
                            <Flex alignItems={'center'}>
                                <IconButton
                                    aria-label=""
                                    icon={<FaPlus />}
                                    colorScheme="blackAlpha"
                                    width={'50px'}
                                    h={'50px'}
                                />
                            </Flex>
                            <IconButton
                                aria-label=""
                                icon={<>1</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>2</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>3</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>4</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                            <IconButton
                                aria-label=""
                                icon={<>5</>}
                                colorScheme="gray"
                                width={'50px'}
                                h={'50px'}
                            />
                        </SimpleGrid>
                    </Box>
                </Box>
            </Stack>

            {createFace && <MatrixCreator setCreateFace={setCreateFace} />}
        </>
    )
}

export default Configurator
