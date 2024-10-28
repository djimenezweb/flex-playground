import { motion } from "framer-motion";

const TRANSITION = {
  duration: 0.6,
  type: "tween",
  ease: "easeInOut",
};

const Display = ({
  flexContainerStyle,
  flexItems,
  selectedId,
  setSelectedId,
}) => {
  return (
    <section className="display" data-multiple={!selectedId}>
      <motion.div
        className="flex-container"
        style={{ ...flexContainerStyle }}
        layout
        transition={TRANSITION}
      >
        {flexItems.length > 0 &&
          flexItems.map(({ id, style, content }) => (
            <motion.div
              key={id}
              layout
              className={
                selectedId === id
                  ? "flex-item__border active"
                  : "flex-item__border"
              }
              transition={TRANSITION}
              style={style}
              onClick={() => setSelectedId(id)}
            >
              <motion.div
                layout
                className="flex-item__content"
                transition={TRANSITION}
              >
                {content && (
                  <motion.p layout="position" transition={TRANSITION}>
                    {content}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};
export default Display;
