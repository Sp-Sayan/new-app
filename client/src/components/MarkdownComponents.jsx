export const MarkdownComponents = {
  a: ({ node, ...props }) => (
    <a
      {...props}
      className="text-blue-500 underline font-semibold hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  p: ({ node, ...props }) => (
    <p className="leading-relaxed text-base" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-bold text-foreground " {...props} />
  ),
  code: ({ node, inline, ...props }) => {
    return inline ? (
      <code
        className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm"
        {...props}
      />
    ) : (
      <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm text-white">
        <code {...props} />
      </pre>
    );
  },
};
