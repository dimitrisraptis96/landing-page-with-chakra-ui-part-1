import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text
} from "@chakra-ui/core";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      maxW={{ xl: "1200px" }}
      minH="60vh"
      wrap="no-wrap"
      padding="1.5rem"
      bg="transparent"
      color="primary"
      direction={{ base: "column-reverse", md: "row" }}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Heading as="h1" size="2xl" fontWeight="bold" fontFamily="serif">
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="gray.500"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={{ sm: "center", md: "left" }}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink} style={{ display: "block", width: "100%" }}>
          <Button
            variantColor="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            w="100%"
            rightIcon="arrow-right"
          >
            {ctaText}
          </Button>
        </Link>
        <Text fontSize="xs" mt={2} textAlign="center" w="100%">
          No credit card required
        </Text>
      </Stack>
      <Box w={{ base: "80%", md: "50%" }} mb={{ base: 4, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src={image} size="100%" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/random",
  ctaText: "Create your free account now",
  ctaLink: "/signup"
};
