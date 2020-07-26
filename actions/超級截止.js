module.exports = async context => {
  const { userId, displayName } = context.session.user;
  
  context.resetState();
  await context.sendText(`${displayName} 幫你強制截止囉!`);
  
};
