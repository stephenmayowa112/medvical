import { useMemo, useState } from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { TestimonialCard } from '../components/features/TestimonialCard';
import { TestimonialForm } from '../components/features/TestimonialForm';
import { WhatsAppWidget } from '../components/features/WhatsAppWidget';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useTestimonials } from '../hooks/useTestimonials';
import type { DivisionId } from '../data/content';

const PAGE_SIZE = 6;

export default function TestimonialsPage() {
  const [divisionFilter, setDivisionFilter] = useState<DivisionId | 'ALL'>('ALL');
  const [sortMode, setSortMode] = useState<'date-desc' | 'date-asc' | 'rating-desc' | 'rating-asc'>('date-desc');
  const [page, setPage] = useState(1);

  const {
    testimonials,
    isLoading,
    error,
    submitTestimonial,
    setSortField,
    setSortOrder,
    clearFilters,
    filterByDivision,
  } = useTestimonials({
    initialSortField: 'date',
    initialSortOrder: 'desc',
  });

  const filteredTestimonials = useMemo(() => testimonials, [testimonials]);

  const totalPages = Math.max(1, Math.ceil(filteredTestimonials.length / PAGE_SIZE));
  const paginatedTestimonials = filteredTestimonials.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const applyDivisionFilter = (value: DivisionId | 'ALL') => {
    setDivisionFilter(value);
    setPage(1);

    if (value === 'ALL') {
      clearFilters();
    } else {
      filterByDivision(value);
    }
  };

  const applySort = (value: 'date-desc' | 'date-asc' | 'rating-desc' | 'rating-asc') => {
    setSortMode(value);
    setPage(1);

    if (value.startsWith('date')) {
      setSortField('date');
      setSortOrder(value.endsWith('desc') ? 'desc' : 'asc');
      return;
    }

    setSortField('rating');
    setSortOrder(value.endsWith('desc') ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Patient Testimonials</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Real stories from patients and partners across Med-Vical Medical Centre, Pharmacy & Supplies, and Med-Vical Health.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 border border-slate-200">
            <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Filter by division
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 bg-white"
                    value={divisionFilter}
                    onChange={(e) => applyDivisionFilter(e.target.value as DivisionId | 'ALL')}
                  >
                    <option value="ALL">All divisions</option>
                    <option value="MMC">MMC</option>
                    <option value="MPPS">MPPS</option>
                    <option value="MHS">MHS</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Sort by
                  <select
                    className="rounded-md border border-slate-300 px-3 py-2 bg-white"
                    value={sortMode}
                    onChange={(e) => applySort(e.target.value as 'date-desc' | 'date-asc' | 'rating-desc' | 'rating-asc')}
                  >
                    <option value="date-desc">Newest first</option>
                    <option value="date-asc">Oldest first</option>
                    <option value="rating-desc">Highest rating</option>
                    <option value="rating-asc">Lowest rating</option>
                  </select>
                </label>
              </div>

              <div className="text-sm text-slate-600">
                Showing {filteredTestimonials.length} testimonial{filteredTestimonials.length === 1 ? '' : 's'}
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Success Stories
            </h2>

            {isLoading && <p className="text-slate-600">Loading testimonials...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {!isLoading && !error && paginatedTestimonials.length === 0 && (
              <div className="text-center py-12 text-slate-600 border rounded-lg bg-white">
                No testimonials match your current filter.
              </div>
            )}

            {!isLoading && !error && paginatedTestimonials.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="text-sm text-slate-600">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>

          <Card className="border border-blue-100 bg-blue-50/40 mb-12">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-2xl mb-2">Trusted Across All Three Divisions</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From emergency care and specialty clinics to pharmacy deliveries and community health outreach, we are committed to reliable, compassionate service.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </CardContent>
          </Card>

          <section id="share-testimonial" className="pb-8">
            <h2 className="text-2xl mb-2">Share Your Experience</h2>
            <p className="text-slate-600 mb-6">Your story helps other families and partners make informed healthcare decisions.</p>
            <TestimonialForm onSubmit={submitTestimonial} />
          </section>
        </div>
      </section>

      <WhatsAppWidget division="MMC" defaultMessage="Hello Med-Vical, I would like to ask about your services and testimonials." />
    </div>
  );
}
