import { VuiFlexContainer, VuiFlexItem, VuiTitle, VuiLink, VuiAppHeader } from "../../ui";
import { HeaderLogo } from "./HeaderLogo";

export const AppHeader = () => {
  return (
    <VuiAppHeader
      left={
        <VuiFlexContainer spacing="m" alignItems="center">
          <VuiFlexItem grow={false} shrink={false}>
            <HeaderLogo />
          </VuiFlexItem>

          <VuiFlexItem grow={false} shrink={false}>
            <VuiTitle size="xs">
              <h1>
                <strong>
                  <VuiLink isAnchor href="https://www.jobmakerspace.live/">
                    Job Makerspace
                  </VuiLink>
                </strong>
              </h1>
            </VuiTitle>
          </VuiFlexItem>
        </VuiFlexContainer>
      }
      right={
        <VuiFlexItem grow={false} shrink={false}>
            <VuiTitle size="xs">
              <h1>
                <strong>
                  <VuiLink isAnchor href="https://www.jobmakerspace.live/">
                    Go Back to Job Portal
                  </VuiLink>
                </strong>
              </h1>
            </VuiTitle>
          </VuiFlexItem>
      }
    />
  );
};
