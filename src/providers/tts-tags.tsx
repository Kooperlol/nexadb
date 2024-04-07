import React from "react";
import withTTS from "./tts-provider"; // Import the withTTS HOC

// Define your original components with plain HTML tags
const OriginalP = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLParagraphElement> &
    React.HTMLAttributes<HTMLParagraphElement>
) => <p {...props} />;
const OriginalH1 = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
) => <h1 {...props} />;

// Wrap the original components with TTS
const PWithTTS = withTTS("p")(OriginalP);
const H1WithTTS = withTTS("h1")(OriginalH1);

// Replace all occurrences of <p> and <h1> with their TTS-wrapped equivalents
const WrappedP = PWithTTS;
const WrappedH1 = H1WithTTS;

// Export the wrapped components to be used throughout your application
export { WrappedP as p, WrappedH1 as h1 };
