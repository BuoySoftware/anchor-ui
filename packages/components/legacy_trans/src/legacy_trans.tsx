import { Body } from "@buoysoftware/anchor-typography";

import { KeyPrefix, Namespace, TFuncKey } from "i18next";
import { Trans as ReactI18nTrans, TransProps } from "react-i18next";

const LegacyTrans = <
  K extends TFuncKey<N, TKPrefix> extends infer A ? A : never,
  N extends Namespace,
  TKPrefix extends KeyPrefix<N> = undefined,
  E = React.HTMLProps<HTMLDivElement>
>(
  props: TransProps<K, N, TKPrefix, E>
): React.ReactElement => {
  return (
    <ReactI18nTrans
      components={{
        BodyMediumBold: <Body strong as="span" color="inherit" size="m" />,
        BodySmallRegularBold: (
          <Body strong as="span" color="inherit" size="s" />
        ),
        BodySmallRegularBoldError: (
          <Body strong as="span" color="critical" size="s" />
        ),
      }}
      {...props}
    />
  );
};

LegacyTrans.displayName = "LegacyTrans";

export { LegacyTrans };
