/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  ButtonWithLoggingOnClick,
  ButtonWithLoggingOnClickWithParams,
  ButtonWithLoggingOnClickWithProps,
  ButtonWithLoggingOnMount,
  ButtonWithLoggingOnMountWithParams,
  ButtonWithLoggingOnMountWithProps,
  SuperButton
} from "./components/buttons";

const pageCss = css``;

export const Page = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div css={pageCss}>
      <h3>Counter</h3>
      {counter}
      <h3>Buttons logging on click examples</h3>
      <ButtonWithLoggingOnClick onClick={() => setCounter(counter + 1)}>
        With logging on click
      </ButtonWithLoggingOnClick>
      <ButtonWithLoggingOnClickWithParams
        onClick={() => setCounter(counter + 1)}
      >
        With logging on click with params
      </ButtonWithLoggingOnClickWithParams>
      <ButtonWithLoggingOnClickWithProps
        onClick={() => setCounter(counter + 1)}
        logText="this is Page button"
      >
        With logging on click with props
      </ButtonWithLoggingOnClickWithProps>

      <h3>Buttons logging on mount examples</h3>
      <ButtonWithLoggingOnMount onClick={() => setCounter(counter + 1)}>
        With logging on mount
      </ButtonWithLoggingOnMount>
      <ButtonWithLoggingOnMountWithParams
        onClick={() => setCounter(counter + 1)}
      >
        With logging on mount with params
      </ButtonWithLoggingOnMountWithParams>
      <ButtonWithLoggingOnMountWithProps
        onClick={() => setCounter(counter + 1)}
        logText="this is Page button"
      >
        With logging on mount with props
      </ButtonWithLoggingOnMountWithProps>

      <h3>Buttons with EVERYTHING</h3>
      <SuperButton
        logText="everything button"
        onClick={() => setCounter(counter + 1)}
      >
        With EVERYTHING
      </SuperButton>
    </div>
  );
};
