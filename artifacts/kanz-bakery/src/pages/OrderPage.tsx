import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { menuItems } from '@/data/menu';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function OrderPage() {
  const { t } = useTranslation();
  const { items: cartItems, addItem, removeItem, updateQuantity } = useCart();

  const [orderType, setOrderType] = useState<'bulk' | 'catering'>('bulk');
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');

  // Add item from the dropdown — delegates to cart so badge updates immediately
  const handleAddItem = () => {
    if (!selectedMenuItem) return;
    const menuItem = menuItems.find(item => item.id === Number(selectedMenuItem));
    if (!menuItem) return;
    addItem({ id: menuItem.id, name: menuItem.name, price: menuItem.price });
    setSelectedMenuItem('');
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-background py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-foreground tracking-tight">
              {t('order.hero.title')}
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              {t('order.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-8">
        <p role="status" className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">
          {t('order.demoNotice')}
        </p>
      </div>

      {/* Demo Cart */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                {/* Order Type */}
                <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="font-serif text-base sm:text-xl">{t('order.type.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setOrderType('bulk')}
                        className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-start ${
                          orderType === 'bulk' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                        aria-pressed={orderType === 'bulk'}
                        data-testid="button-type-bulk"
                      >
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t('order.type.bulk.title')}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t('order.type.bulk.desc')}</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('catering')}
                        className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-start ${
                          orderType === 'catering' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                        aria-pressed={orderType === 'catering'}
                        data-testid="button-type-catering"
                      >
                        <p className="font-semibold text-foreground text-sm sm:text-base">{t('order.type.catering.title')}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t('order.type.catering.desc')}</p>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Item Selection */}
                <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="font-serif text-base sm:text-xl">{t('order.items.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Select value={selectedMenuItem} onValueChange={setSelectedMenuItem}>
                        <SelectTrigger className="flex-1" aria-label={t('order.items.title')} data-testid="select-menu-item">
                          <SelectValue placeholder={t('order.items.choosePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent className="max-h-72 overflow-y-auto">
                          {menuItems.map((item) => (
                            <SelectItem key={item.id} value={item.id.toString()}>
                              {item.name} – ${item.price.toFixed(2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button type="button" onClick={handleAddItem} disabled={!selectedMenuItem} aria-label={t('order.items.add')} data-testid="button-add-item">
                        <Plus aria-hidden="true" className="w-4 h-4 me-1 sm:me-2" />
                        <span className="hidden sm:inline">{t('order.items.add')}</span>
                      </Button>
                    </div>

                    {cartItems.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-border">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                            data-testid={`order-item-${item.id}`}
                          >
                            <div className="flex-1 space-y-2 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <p className="font-medium text-foreground text-sm sm:text-base truncate">{item.name}</p>
                                  <p className="text-xs sm:text-sm text-muted-foreground">
                                    ${item.price.toFixed(2)} {t('order.items.each')}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                                  aria-label={t('order.items.removeItem', { item: item.name })}
                                  data-testid={`button-remove-${item.id}`}
                                >
                                  <Trash2 aria-hidden="true" className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  type="button" variant="outline" size="icon"
                                  className="h-8 w-8 shrink-0"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  aria-label={t('order.items.decreaseQuantity', { item: item.name })}
                                  data-testid={`button-decrease-${item.id}`}
                                >
                                  <Minus aria-hidden="true" className="w-3 h-3" />
                                </Button>
                                <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                                <Button
                                  type="button" variant="outline" size="icon"
                                  className="h-8 w-8 shrink-0"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label={t('order.items.increaseQuantity', { item: item.name })}
                                  data-testid={`button-increase-${item.id}`}
                                >
                                  <Plus aria-hidden="true" className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="lg:sticky lg:top-24 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="font-serif text-base sm:text-xl">{t('order.summary.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{t('order.summary.type')}:</span>
                        <span className="font-medium">
                          {t(`order.typeLabel.${orderType}`)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{t('order.summary.items')}:</span>
                        <span className="font-medium">{cartItems.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{t('order.summary.totalQty')}:</span>
                        <span className="font-medium">
                          {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm text-muted-foreground">{t('order.summary.estimated')}:</span>
                        <span className="font-serif font-bold text-xl sm:text-2xl text-primary" data-testid="text-total">
                          ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{t('order.summary.note')}</p>
                    </div>

                    <Button type="button" className="w-full" size="lg" disabled data-testid="button-submit-order">
                      {t('order.demoButton')}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
