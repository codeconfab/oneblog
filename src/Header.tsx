/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Heading } from "grommet";
import Avatar from "./Avatar";
import Link from "next/link";
import ConfigContext from "./ConfigContext";
import { PostBox } from "./Post";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  Button,
  Header,
  Keyboard,
  ResponsiveContext,
  Text,
  TextInput,
} from "grommet";
import { Search as SearchIcon, Nodes } from "grommet-icons";
const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon-example",
}))``;

function AvatarHeader({ gitHub, adminLinks }) {
  const { config } = useContext(ConfigContext);
  return (
    <Box margin="medium">
      <Header fill="horizontal">
        <Link href="/">
          <a>
            <Button>
              <Box
                direction="row"
                align="start"
                gap="medium" // pad maintains accessible hit target
                // non-responsive maintains same dimensions for mobile
                pad={{
                  vertical: "small",
                }}
                responsive={false}>
                <Box direction="row" gap="xsmall" wrap>
                  <Nodes />
                  <Text color="text-strong" weight="bold">
                    {config.title || "OneBlog"}
                  </Text>
                </Box>
              </Box>
            </Button>
          </a>
        </Link>
        <Button>
          <Avatar
            background="background-contrast"
            gitHub={gitHub}
            adminLinks={adminLinks}
          />
        </Button>
      </Header>
    </Box>
  );
}

export default AvatarHeader;
