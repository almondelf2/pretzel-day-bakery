import { useParams, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { getMenuItem } from '@/data/menu';
import { Button } from '@/components/ui/button';
import { QuantityControl } from '@/components/QuantityControl';
import { Award, ChevronLeft } from 'lucide-react';

export default function MenuItemDetailPage() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null;
  const { t } = useTranslation();
  const item = id ? getMenuItem(id) : undefined;

  if (!id) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <p className="text-muted-foreground">{t('itemDetail.invalidItem')}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center space-y-4">
        <p className="text-muted-foreground">{t('itemDetail.itemNotFound')}</p>
        <Link href="/menu">
          <Button variant="outline">{t('itemDetail.back')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <Link href="/menu">
          <Button variant="ghost" className="mb-6 sm:mb-8 group" data-testid="button-back">
            <ChevronLeft className="w-4 h-4 me-2 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1 transition-transform" />
            {t('itemDetail.back')}
          </Button>
        </Link>

        {/* Item Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="aspect-square bg-muted">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  data-testid="img-menu-item"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">{t('itemDetail.noImageAvailable')}</span>
                </div>
              )}
            </div>
            {item.featured && (
              <div className="absolute top-4 end-4">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                  <Award className="w-4 h-4" />
                  {t('itemDetail.featuredItem')}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-5 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="font-serif font-bold text-2xl sm:text-4xl text-foreground" data-testid="text-item-name">
                  {item.name}
                </h1>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-1">
                  {item.categoryName}
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-primary" data-testid="text-item-price">
                ${item.price.toFixed(2)}
              </p>
            </div>

            {item.description && (
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="text-item-description">
                {item.description}
              </p>
            )}

            {/* Add to Order */}
            <div className="max-w-xs">
              <QuantityControl
                item={{ id: item.id, name: item.name, price: item.price }}
                available={item.available}
                size="md"
              />
            </div>

            {!item.available && (
              <div className="p-4 rounded-lg bg-muted border border-border">
                <p className="text-sm font-medium text-muted-foreground">
                  {t('itemDetail.unavailableMsg')}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
