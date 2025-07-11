describe('info', function () {
  let tool = eruda.get('info')
  let $tool = $('.eruda-info')

  describe('default', function () {
    it('location', function () {
      expect($tool.find('.eruda-content').eq(0)).toContainText(location.href)
    })

    it('user agent', function () {
      expect($tool.find('.eruda-content').eq(1)).toContainText(
        navigator.userAgent
      )
    })

    it('device', function () {
      expect($tool.find('.eruda-content').eq(2)).toContainText(
        window.innerWidth
      )
    })

    it('system', function () {
      expect($tool.find('.eruda-content').eq(3)).toContainText('os')
    })

    it('sponsor', function () {
      expect($tool.find('.eruda-content').eq(4)).toContainText(
        'Open Collective'
      )
    })

    it('about', function () {
      expect($tool.find('.eruda-content').eq(5)).toHaveText(/Eruda v[\d.]+/)
    })
  })

  it('clear', function () {
    tool.clear()
    expect($tool.find('li')).toHaveLength(0)
  })

  it('add', function () {
    tool.add('test', 'eruda')
    expect($tool.find('.eruda-title')).toContainText('test')
    expect($tool.find('.eruda-content')).toContainText('eruda')
    tool.add('test', 'update')
    tool.add('test', 'update')
    expect($tool.find('.eruda-content')).toContainText('update')
  })

  it('get', function () {
    expect(tool.get()).toEqual([{ name: 'test', val: 'update' }])
    expect(tool.get('test')).toBe('update')
    expect(tool.get('test2')).not.toBeDefined()
  })

  it('remove', function () {
    tool.remove('test')
    expect($tool.find('li')).toHaveLength(0)
  })
})
