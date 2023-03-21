import React from "react";
import { DatabaseInput } from "src/components/DatabaseInput";
import { ErrorContainer } from "src/components/ErrorContainer";
import { MonacoEditor } from "src/components/MonacoEditor";
import styled from "styled-components";

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
`;

export const JsonEditor: React.FC = () => {
  return (
    <StyledEditorWrapper>
      <ErrorContainer />
      <DatabaseInput/>
      <MonacoEditor />
    </StyledEditorWrapper>
  );
};
