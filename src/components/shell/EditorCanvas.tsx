import { useMemo } from "react";
import { Editor } from "../../Editor";
import { FrontmatterPanel } from "@/components/FrontmatterPanel";
import { parseDocument, serializeDocument } from "@/frontmatter";
import { cn } from "@/lib/utils";

interface EditorCanvasProps {
  currentDoc: string | null;
  docContent: string;
  onDocContentChange: (content: string) => void;
  onSave: () => void;
  viewMode?: "document" | "preview" | "outline";
  zoomLevel?: number;
}

export function EditorCanvas({
  currentDoc,
  docContent,
  onDocContentChange,
  onSave,
  viewMode = "document",
  zoomLevel = 100,
}: EditorCanvasProps) {
  const { frontmatter, body } = useMemo(
    () => parseDocument(docContent),
    [docContent]
  );

  const isPreview = viewMode === "preview";

  return (
    <section
      className={cn("canvas-area", isPreview && "canvas-area-preview")}
    >
      <div
        className="canvas-scroll"
        style={
          isPreview
            ? { zoom: zoomLevel / 100 }
            : undefined
        }
      >
        {currentDoc ? (
          <div
            className={cn("editor-area", "editor-wysiwyg")}
          >
            <FrontmatterPanel
              frontmatter={frontmatter}
              onChange={(fm) =>
                onDocContentChange(serializeDocument(fm, body))
              }
            />
            <Editor
              content={body}
              onChange={(newBody) =>
                onDocContentChange(serializeDocument(frontmatter, newBody))
              }
              onSave={onSave}
            />
          </div>
        ) : (
          <div className="empty-editor">
            <div className="empty-editor-content">
              <div className="empty-editor-watermark" aria-hidden>
                Folivm
              </div>
              <div className="empty-editor-shortcuts">
                <div className="shortcut-row">
                  <span className="shortcut-action">New Window</span>
                  <span className="shortcut-keys">
                    {["⌘", "⇧", "N"].map((k) => (
                      <kbd key={k} className="keycap">
                        {k}
                      </kbd>
                    ))}
                  </span>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Save</span>
                  <span className="shortcut-keys">
                    {["⌘", "S"].map((k) => (
                      <kbd key={k} className="keycap">
                        {k}
                      </kbd>
                    ))}
                  </span>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Find in project</span>
                  <span className="shortcut-keys">
                    {["⌘", "⇧", "F"].map((k) => (
                      <kbd key={k} className="keycap">
                        {k}
                      </kbd>
                    ))}
                  </span>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Focus AI assistant</span>
                  <span className="shortcut-keys">
                    {["⌘", "."].map((k) => (
                      <kbd key={k} className="keycap">
                        {k}
                      </kbd>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
