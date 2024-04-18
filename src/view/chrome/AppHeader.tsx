// import { BiLogoGithub } from "react-icons/bi";
import { VuiFlexContainer, VuiFlexItem, VuiTitle, VuiIconButton, VuiIcon, VuiLink, VuiAppHeader } from "../../ui";
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
                  <VuiLink isAnchor href="https://jobmakerspace.vercel.app/">
                    Job Makerspace
                  </VuiLink>
                </strong>
              </h1>
            </VuiTitle>
          </VuiFlexItem>
        </VuiFlexContainer>
      }
      right={
        <VuiIconButton
          href="https://jobmakerspace.vercel.app/"
          target="_blank"
          color="neutral"
          size="l"
          icon={
            <VuiIcon>
              {/* <BiLogoGithub /> */}
              <button>Go Back</button>
            </VuiIcon>
          }
        />
      }
    />
  );
};
